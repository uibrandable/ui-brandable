# UI BRANDABLE - Static E-commerce Website

## What is included
- Home page
- Products page
- Contact page
- Responsive mobile design
- UI BRANDABLE theme inspired by the supplied brand images
- Fixed two WhatsApp order numbers
- Empty product section ready for your products
- Central `config.js` for easy editing

## Add a product
Open `config.js` and change:
```
const PRODUCTS = [
  {
    name: "Your Product",
    price: "Rs. 1,299",
    oldPrice: "Rs. 1,799",
    image: "assets/product-1.jpg",
    description: "Short description here.",
    badge: "NEW"
  }
];
```
Then put your product image inside the `assets` folder with the same filename.

## Important
The two WhatsApp numbers are already built into `config.js`:
- 923273115194
- 923378018028

You can leave them as they are.

## GitHub Pages
1. Create a GitHub repository.
2. Upload all files/folders from this project.
3. Go to Settings → Pages.
4. Select Deploy from a branch.
5. Choose `main` and `/ (root)`.
6. Save.
7. GitHub will provide the public website URL.

No build step is required. This is plain HTML/CSS/JavaScript so it is easy to edit.
