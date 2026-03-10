import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Sacramento Car Care Tips & Mobile Auto Repair Blog | EC Mobile Auto',
  description:
    'Car care tips, mobile mechanic guides, and Sacramento auto repair advice from EC Mobile Auto Services LLC. Honest info to keep your car running longer.',
  alternates: { canonical: 'https://ecmobileauto.com/blog' },
};

const posts = [
  {
    slug: 'how-much-does-mobile-mechanic-cost',
    title: 'How Much Does a Mobile Mechanic Cost in Sacramento, CA? (2026 Pricing Guide)',
    excerpt: 'Wondering what a mobile mechanic costs compared to a traditional shop? We break down pricing for every common service, what factors affect the cost, and how to make sure you\'re getting a fair deal.',
    date: 'March 1, 2026',
    readTime: '6 min read',
    category: 'Pricing & Value',
  },
  {
    slug: 'mobile-mechanic-vs-shop',
    title: 'Mobile Mechanic vs. Auto Shop: Which Is Better for Sacramento Drivers?',
    excerpt: 'Is a mobile mechanic right for you, or is a traditional shop the better call? We compare both options honestly — when each makes sense, what the real costs are, and what Sacramento drivers need to know.',
    date: 'February 20, 2026',
    readTime: '7 min read',
    category: 'How It Works',
  },
  {
    slug: '30-60-90-car-maintenance-rule',
    title: 'The 30-60-90 Car Maintenance Rule: What Sacramento Drivers Need to Know',
    excerpt: 'The 30-60-90 rule is the backbone of preventive car care. Learn exactly what needs to be done at each milestone — and why Sacramento\'s climate makes it even more important to stay on schedule.',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Maintenance Tips',
  },
  {
    slug: 'how-often-change-oil',
    title: 'How Often Should You Change Your Oil? The Real Answer in 2026',
    excerpt: 'The old "every 3,000 miles" rule is outdated. Modern synthetic oils and engines have changed everything. Here\'s what your owner\'s manual actually says — and what that means for Sacramento drivers.',
    date: 'January 28, 2026',
    readTime: '5 min read',
    category: 'Maintenance Tips',
  },
  {
    slug: 'signs-battery-dying',
    title: '6 Signs Your Car Battery Is About to Die (Sacramento\'s Heat Makes It Worse)',
    excerpt: 'Sacramento summers are brutal on car batteries. Know the warning signs before you\'re stranded in a Costco parking lot on a 105-degree day. What to watch for and what to do.',
    date: 'January 15, 2026',
    readTime: '4 min read',
    category: 'Vehicle Health',
  },
  {
    slug: 'pre-purchase-inspection-guide',
    title: 'Why You Should Never Buy a Used Car Without a Pre-Purchase Inspection',
    excerpt: 'In Sacramento\'s hot used car market, sellers know how to hide problems. A professional pre-purchase inspection is the single best $100 you\'ll spend before committing to a used car purchase.',
    date: 'January 5, 2026',
    readTime: '5 min read',
    category: 'Buying a Car',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Auto Care Resources</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Sacramento Car Care Tips &amp; Mobile Auto Repair Blog
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Honest advice on car maintenance, repair costs, and getting the most out of your vehicle — from Sacramento&apos;s own mobile mechanic.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card flex flex-col hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">{post.category}</span>
                <h2 className="text-lg font-bold text-blue-900 mt-2 mb-3 flex-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-orange-500 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-400">
                    <span>{post.date}</span> · <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
