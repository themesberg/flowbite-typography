const Routes = {
    Home: '/',
    Docs: '/docs/',
    Tools: '/tools/',
    Resources: '/resources/',
    License: '/license/',
    PrivacyPolicy: '/privacy-policy/',
    TermsAndConditions: '/terms-and-conditions/',
    QuickStart: '/getting-started/quickstart/',
    Blog: '/blog/',
    Contact: '/contact/',
  
    Login: '/login/',
    Register: '/register/',
    NewPassword: '/new-password/',
    ForgotPassword: '/forgot-password/',
    ResetPassword: '/reset-password/',
    ActivateAccount: '/activate-account/',
    TermsAndConditions: '/terms-and-conditions/',
  
    Figma: '/figma/',
    Blocks: '/blocks/',
    BlockSubcategories: (categorySlug) => `/blocks/${categorySlug}/`,
    BlockTemplates: (categorySlug, subcategorySlug) => `/blocks/${categorySlug}/${subcategorySlug}/`,
  
    ProDetails: {
      Home: '/pro/',
      Pricing: '/pro/#pricing',
      ApplicationUI: '/pro/#application-ui',
      Figma: '/pro/#figma',
      Hugo: '/pro/#hugo',
      Webpack: '/pro/#webpack'
    },
  
    // routes available for authenticated users only
    User: {
      Dashboard: '/dashboard/',
      Downloads: '/dashboard/downloads/',
      Billing: '/dashboard/billing/',
      Rewards: '/dashboard/rewards/',
      Support: '/dashboard/support/',
      AccountSettings: '/dashboard/account-settings/'
    }
  }
  
  export default Routes
  