import { ContractType, Server, Section } from '@prisma/client';

export interface Collection {
  name: string;
  contractAddress: string;
  openSeaSlug: string;
  contractType: ContractType;
  server: Server;
  section: Section;
}

export const collections: Collection[] = [
  {
    name: 'RLD Editions Season 2',
    contractAddress: '0xd0020febf800010187a1f90cbeea764fa19d646f',
    openSeaSlug: 'osf2',
    contractType: ContractType.ERC1155,
    server: Server.Degenz,
    section: Section.OsfSeason2,
  },
];
