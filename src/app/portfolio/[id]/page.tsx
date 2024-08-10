import { Box } from '@/components/box';

interface Props {
  params: { id: string };
}

export default function PortfolioSinglePage({ params: { id } }: Props) {
  return <Box>Portfolio {id}</Box>;
}
