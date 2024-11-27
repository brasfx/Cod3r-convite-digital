import Page from '@/components/templates/Page';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Page>{children}</Page>;
}
