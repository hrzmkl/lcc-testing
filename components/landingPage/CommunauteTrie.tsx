import { fetchCommunauteProfileByCategory } from '@/services/data';
import CommunauteTrieClient from './CommunauteTrieClient';
import { use } from 'react';

export default function CommunauteTrie() {
  const getCategories = fetchCommunauteProfileByCategory();
  const categories = use(getCategories);

  return <CommunauteTrieClient categories={categories || []} />;
}
