import { PROVIDERS, getProviderById } from "../providersData";
import { ProviderDetailClient } from "./ProviderDetailClient";

export function generateStaticParams() {
  return PROVIDERS.map((provider) => ({
    id: String(provider.id),
  }));
}

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const provider = getProviderById(id);

  return <ProviderDetailClient provider={provider} />;
}
