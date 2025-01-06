# دليل استضافة موقع RZ1 🌐
# Hosting Guide for RZ1 Portfolio 🌐

هذا الدليل سيساعدك في نشر موقع محفظتك الشخصية باستخدام منصات الاستضافة المجانية المختلفة.
This guide will help you deploy your portfolio website using different free hosting platforms.

## الخيار 1: Vercel (موصى به) 🚀
## Option 1: Vercel (Recommended) 🚀

Vercel مثالي لتطبيقات React ويقدم أفضل أداء.
Vercel is perfect for React applications and offers the best performance.

### الخطوات | Steps:

1. إنشاء حساب Vercel | Create a Vercel Account:
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل باستخدام حساب GitHub الخاص بك

2. تثبيت Vercel CLI (اختياري) | Install Vercel CLI (Optional):
```bash
npm install -g vercel
```

3. النشر | Deploy:
   - الطريقة 1 (الأسهل) | Method 1 (Easiest):
     1. ادفع الكود إلى GitHub | Push your code to GitHub
     2. اذهب إلى لوحة تحكم Vercel | Go to Vercel dashboard
     3. انقر على "مشروع جديد" | Click "New Project"
     4. حدد المستودع الخاص بك | Select your repository
     5. انقر على "نشر" | Click "Deploy"

   - الطريقة 2 (باستخدام CLI) | Method 2 (Using CLI):
```bash
vercel login
vercel
```

## الخيار 2: صفحات GitHub 📘
## Option 2: GitHub Pages 📘

استضافة مجانية مباشرة من مستودع GitHub الخاص بك.
Free hosting directly from your GitHub repository.

### الخطوات | Steps:

1. تحديث `vite.config.js` | Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()]
})
```

2. إضافة سكريبت النشر إلى `package.json` | Add deployment script to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. تثبيت gh-pages | Install gh-pages:
```bash
npm install gh-pages --save-dev
```

4. البناء والنشر | Build and deploy:
```bash
npm run build
npm run deploy
```

## الخيار 3: Netlify 🌟
## Option 3: Netlify 🌟

خيار ممتاز آخر مع ميزات رائعة.
Another excellent option with great features.

### الخطوات | Steps:

1. إنشاء حساب Netlify | Create a Netlify account:
   - اذهب إلى [netlify.com](https://netlify.com)

2. النشر | Deploy:
   - الطريقة 1 (واجهة المستخدم) | Method 1 (UI):
     1. اذهب إلى لوحة تحكم Netlify | Go to Netlify dashboard
     2. اسحب وأفلت مجلد `dist` بعد البناء | Drag and drop your `dist` folder

   - الطريقة 2 (Git) | Method 2 (Git):
     1. ادفع إلى GitHub | Push to GitHub
     2. اربط Netlify بمستودعك | Connect Netlify to your repository
     3. حدد المستودع وانشر | Select repository and deploy

## مرجع أوامر البناء 🛠️
## Build Command Reference 🛠️

قبل النشر، قم دائماً ببناء مشروعك | Before deploying, always build your project:
```bash
npm run build
```

## المتغيرات البيئية 🔐
## Environment Variables 🔐

إذا كان مشروعك يستخدم متغيرات بيئية | If your project uses environment variables:

1. إنشاء ملف `.env` محلياً | Create `.env` file locally
2. إضافة المتغيرات إلى منصة الاستضافة | Add variables to hosting platform:
   - Vercel: قسم المتغيرات البيئية في إعدادات المشروع | Environment Variables section
   - Netlify: إعدادات البناء والنشر | Build & Deploy settings
   - GitHub Pages: الأسرار في إعدادات المستودع | Secrets in repository settings

## إعداد النطاق المخصص 🌐
## Custom Domain Setup 🌐

جميع المنصات تدعم النطاقات المخصصة | All platforms support custom domains:

1. شراء نطاق من مسجل | Purchase domain from registrar
2. إضافة النطاق في إعدادات منصة الاستضافة | Add domain in hosting platform settings
3. تحديث سجلات DNS كما هو موضح | Update DNS records as instructed
4. انتظر انتشار DNS (24-48 ساعة) | Wait for DNS propagation (24-48 hours)

## شهادات SSL 🔒
## SSL Certificates 🔒

- Vercel: HTTPS تلقائي | Automatic HTTPS
- Netlify: HTTPS تلقائي | Automatic HTTPS
- GitHub Pages: HTTPS تلقائي مع نطاق مخصص | Automatic HTTPS with custom domain

## استكشاف الأخطاء وإصلاحها 🔍
## Troubleshooting 🔍

المشاكل الشائعة والحلول | Common issues and solutions:

1. فشل البناء | Build fails:
   - تحقق من سجلات البناء | Check build logs
   - تأكد من تثبيت جميع التبعيات | Verify all dependencies
   - تأكد من توافق إصدار node | Confirm node version

2. أخطاء 404 | 404 errors:
   - تحقق من تكوين URL الأساسي | Check base URL
   - تحقق من إعداد التوجيه | Verify routing
   - تأكد من صحة جميع المسارات | Ensure all paths are correct

3. صفحة فارغة | Blank page:
   - تحقق من وحدة التحكم للأخطاء | Check console for errors
   - تحقق من مخرجات البناء | Verify build output
   - تأكد من تحميل جميع الأصول | Confirm all assets are loading

## أفضل الممارسات ✨
## Best Practices ✨

1. اختبر محلياً دائماً قبل النشر | Always test locally before deploying
2. استخدم المتغيرات البيئية للبيانات الحساسة | Use environment variables for sensitive data
3. تحسين الصور والأصول | Optimize images and assets
4. تمكين النشر التلقائي | Enable automatic deployments
5. إعداد نشر المعاينة للفروع | Set up preview deployments

تذكر: جميع هذه المنصات تقدم مستويات مجانية كافية للمحافظ الشخصية!
Remember: All these platforms offer free tiers sufficient for personal portfolios!
