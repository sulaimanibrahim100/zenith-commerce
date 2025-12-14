import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateOrderId(): string {
  return `ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
}

export function getWhatsAppReceiptUrl(orderId: string, total: number, items: number): string {
  const message = encodeURIComponent(
    `🧾 *Payment Receipt*\n\n` +
    `Order ID: ${orderId}\n` +
    `Items: ${items}\n` +
    `Total: ${formatPrice(total)}\n\n` +
    `I have made payment for my order. Please confirm.\n\n` +
    `Thank you!`
  );
  // Replace with your actual WhatsApp number
  return `https://wa.me/2348001234567?text=${message}`;
}
