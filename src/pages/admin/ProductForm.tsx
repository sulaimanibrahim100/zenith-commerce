import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, setDoc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import AdminHeader from '@/components/admin/AdminHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, ArrowLeft, Plus, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Category {
  id: string;
  name: string;
}

const ProductForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [slugError, setSlugError] = useState('');
  
  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    originalPrice: '',
    categoryId: '',
    images: [] as string[],
    inStock: true,
    metaTitle: '',
    metaDescription: '',
  });

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  };

  useEffect(() => {
    fetchCategories();
    if (isEditing) {
      fetchProduct();
    }
  }, [id]);

  const fetchCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'categories'));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCategories(data);
      
      if (data.length === 0) {
        toast({
          title: 'No Categories',
          description: 'Please create a category before adding products.',
          variant: 'destructive',
        });
        navigate('/admin/categories/new');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      if (!isEditing) setLoading(false);
    }
  };

  const fetchProduct = async () => {
    try {
      const docRef = doc(db, 'products', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setForm({
          name: data.name || '',
          slug: data.slug || '',
          description: data.description || '',
          price: data.price?.toString() || '',
          originalPrice: data.originalPrice?.toString() || '',
          categoryId: data.categoryId || '',
          images: data.images || [],
          inStock: data.inStock ?? true,
          metaTitle: data.metaTitle || '',
          metaDescription: data.metaDescription || '',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Product not found.',
          variant: 'destructive',
        });
        navigate('/admin/products');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setForm((prev) => ({
      ...prev,
      name,
      slug: prev.slug || generateSlug(name),
      metaTitle: prev.metaTitle || name,
    }));
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const slug = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setForm((prev) => ({ ...prev, slug }));
    setSlugError('');
  };

  const validateSlug = async (slug: string): Promise<boolean> => {
    if (!slug) {
      setSlugError('Slug is required');
      return false;
    }

    const q = query(collection(db, 'products'), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    
    const exists = snapshot.docs.some((doc) => doc.id !== id);
    if (exists) {
      setSlugError('This slug is already in use');
      return false;
    }

    return true;
  };

  const addImage = () => {
    if (newImageUrl.trim() && !form.images.includes(newImageUrl.trim())) {
      setForm((prev) => ({
        ...prev,
        images: [...prev.images, newImageUrl.trim()],
      }));
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim()) {
      toast({ title: 'Error', description: 'Product name is required.', variant: 'destructive' });
      return;
    }
    if (!form.categoryId) {
      toast({ title: 'Error', description: 'Please select a category.', variant: 'destructive' });
      return;
    }
    if (!form.price || isNaN(Number(form.price))) {
      toast({ title: 'Error', description: 'Valid price is required.', variant: 'destructive' });
      return;
    }

    setSaving(true);

    try {
      const isValidSlug = await validateSlug(form.slug);
      if (!isValidSlug) {
        setSaving(false);
        return;
      }

      const productData = {
        name: form.name.trim(),
        slug: form.slug,
        description: form.description,
        price: Number(form.price),
        originalPrice: form.originalPrice ? Number(form.originalPrice) : null,
        categoryId: form.categoryId,
        images: form.images,
        inStock: form.inStock,
        metaTitle: form.metaTitle.trim() || form.name.trim(),
        metaDescription: form.metaDescription.trim(),
        updatedAt: new Date(),
        ...(isEditing ? {} : { createdAt: new Date() }),
      };

      const docId = isEditing ? id! : doc(collection(db, 'products')).id;
      await setDoc(doc(db, 'products', docId), productData, { merge: true });

      toast({
        title: 'Success',
        description: isEditing ? 'Product updated successfully.' : 'Product created successfully.',
      });

      navigate('/admin/products');
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: 'Error',
        description: 'Failed to save product.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AdminHeader title={isEditing ? 'Edit Product' : 'Add Product'} />
      
      <div className="p-6">
        <Link
          to="/admin/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>
              
              <div className="space-y-2">
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleNameChange}
                  placeholder="e.g., HP EliteBook 840 G5"
                  className="h-11"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₦) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
                    placeholder="450000"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price (₦)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    value={form.originalPrice}
                    onChange={(e) => setForm((prev) => ({ ...prev, originalPrice: e.target.value }))}
                    placeholder="550000"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={form.categoryId}
                  onValueChange={(value) => setForm((prev) => ({ ...prev, categoryId: value }))}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="inStock">In Stock</Label>
                  <p className="text-xs text-muted-foreground">Is this product available for purchase?</p>
                </div>
                <Switch
                  id="inStock"
                  checked={form.inStock}
                  onCheckedChange={(checked) => setForm((prev) => ({ ...prev, inStock: checked }))}
                />
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Description</h2>
              <div className="prose-editor">
                <ReactQuill
                  theme="snow"
                  value={form.description}
                  onChange={(value) => setForm((prev) => ({ ...prev, description: value }))}
                  modules={quillModules}
                  placeholder="Write a detailed product description..."
                  className="bg-background rounded-lg"
                />
              </div>
              <style>{`
                .prose-editor .ql-container {
                  min-height: 200px;
                  font-family: inherit;
                }
                .prose-editor .ql-editor {
                  min-height: 200px;
                }
              `}</style>
            </div>

            {/* SEO */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">SEO Settings</h2>
              
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={handleSlugChange}
                  placeholder="hp-elitebook-840-g5"
                  className={`h-11 ${slugError ? 'border-destructive' : ''}`}
                />
                {slugError && <p className="text-sm text-destructive">{slugError}</p>}
                <p className="text-xs text-muted-foreground">
                  URL: /products/{form.slug || 'product-slug'}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={form.metaTitle}
                  onChange={(e) => setForm((prev) => ({ ...prev, metaTitle: e.target.value }))}
                  placeholder="HP EliteBook 840 G5 - Best Laptop in Nigeria"
                  className="h-11"
                  maxLength={60}
                />
                <p className="text-xs text-muted-foreground text-right">
                  {form.metaTitle.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={form.metaDescription}
                  onChange={(e) => setForm((prev) => ({ ...prev, metaDescription: e.target.value }))}
                  placeholder="Buy HP EliteBook 840 G5 laptop in Nigeria. Best prices, fast delivery..."
                  rows={3}
                  maxLength={160}
                />
                <p className="text-xs text-muted-foreground text-right">
                  {form.metaDescription.length}/160 characters
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Images */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Images</h2>
              
              <div className="flex gap-2">
                <Input
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Image URL"
                  className="h-10 flex-1"
                />
                <Button type="button" onClick={addImage} size="sm" className="h-10">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {form.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {form.images.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Product ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Error';
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No images added</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <Button type="submit" disabled={saving} className="w-full h-11">
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : isEditing ? (
                  'Update Product'
                ) : (
                  'Create Product'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => navigate('/admin/products')}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
