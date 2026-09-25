import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://127.0.0.1:8000/v1/crops', () => {
    return HttpResponse.json({
      items: [
        {
          id: '1',
          name: 'Citronella',
          unique_name: 'Cymbopogon nardus',
          description: '',
          notes: 'Bought at a greenhouse',
          created_at: '2026-09-24',
        },
        {
          id: '2',
          name: 'Banana',
          unique_name: 'Musa acuminata',
          description: 'Platano de Canarias',
          notes: '',
          created_at: '2026-09-24',
        },
        {
          id: '3',
          name: 'Purple yam',
          unique_name: 'Dioscorea alata',
          description: 'Tropical climbing vine grown',
          notes: 'It originated in Southeast Asia.',
          created_at: '2026-08-20',
        },
        {
          id: '4',
          name: 'Cardamomo',
          unique_name: '',
          description: '',
          notes: 'antimicrobial and bactericidal',
          created_at: '2025-10-04',
        },
        {
          id: '5',
          name: 'Maize',
          unique_name: 'Zea mays',
          description: 'Worldwide, except Antarctica',
          notes:
            'Maize is a domesticated plant belonging to the grasses. The stem of the maize plant looks a bit like bamboo canes and has internodes that are 20 to 30 centimeters long.',
          created_at: '2026-03-24',
        },
        {
          id: '6',
          name: 'Sorghum',
          unique_name: 'Sorghum bicolor',
          description:
            'Sorghum is an important cereal in relatively drier tropical regions',
          notes: 'In German, it is called Kafferkoren.',
          created_at: '2026-08-14',
        },
        {
          id: '7',
          name: 'Hairy crabgrass',
          unique_name: 'Musa acuminata',
          description: 'Platano de Canarias',
          notes: '',
          created_at: '2020-09-24',
        },
        {
          id: '8',
          name: 'Walnuts',
          unique_name: 'Juglans spp.',
          description:
            'A walnut is an edible seed of trees of the genus Juglans.',
          notes:
            'They throw stones at the walnut trees, but not at the maple. (Greek proverb)',
          created_at: '2026-12-24',
        },
        {
          id: '9',
          name: 'Chili Peppers',
          unique_name: 'Capsicum spp.',
          description: 'Flowers develop about 3 months after planting',
          notes: 'Not to be confused with the rock band',
          created_at: '2026-09-24',
        },
        {
          id: '10',
          name: 'Mulberry',
          unique_name: 'Morus spp.',
          description: 'Deciduous, but can be evergreen in tropical climates.',
          notes:
            'With time and patience the mulberry leaf becomes a silk gown. (Chinese proverb)',
          created_at: '2026-09-24',
        },
        {
          id: '11',
          name: 'Citronella',
          unique_name: 'Cymbopogon nardus',
          description: '',
          notes: 'Bought at a greenhouse',
          created_at: '2026-09-24',
        },
        {
          id: '12',
          name: 'Banana',
          unique_name: 'Musa acuminata',
          description: 'Platano de Canarias',
          notes: '',
          created_at: '2026-09-24',
        },
        {
          id: '13',
          name: 'Purple yam',
          unique_name: 'Dioscorea alata',
          description: 'Tropical climbing vine grown',
          notes: 'It originated in Southeast Asia.',
          created_at: '2026-08-20',
        },
        {
          id: '14',
          name: 'Cardamomo',
          unique_name: '',
          description: '',
          notes: 'antimicrobial and bactericidal',
          created_at: '2025-10-04',
        },
        {
          id: '15',
          name: 'Maize',
          unique_name: 'Zea mays',
          description: 'Worldwide, except Antarctica',
          notes:
            'Maize is a domesticated plant belonging to the grasses. The stem of the maize plant looks a bit like bamboo canes and has internodes that are 20 to 30 centimeters long.',
          created_at: '2026-03-24',
        },
        {
          id: '16',
          name: 'Sorghum',
          unique_name: 'Sorghum bicolor',
          description:
            'Sorghum is an important cereal in relatively drier tropical regions',
          notes: 'In German, it is called Kafferkoren.',
          created_at: '2026-08-14',
        },
        {
          id: '17',
          name: 'Hairy crabgrass',
          unique_name: 'Musa acuminata',
          description: 'Platano de Canarias',
          notes: '',
          created_at: '2020-09-24',
        },
        {
          id: '18',
          name: 'Walnuts',
          unique_name: 'Juglans spp.',
          description:
            'A walnut is an edible seed of trees of the genus Juglans.',
          notes:
            'They throw stones at the walnut trees, but not at the maple. (Greek proverb)',
          created_at: '2026-12-24',
        },
        {
          id: '19',
          name: 'Chili Peppers',
          unique_name: 'Capsicum spp.',
          description: 'Flowers develop about 3 months after planting',
          notes: 'Not to be confused with the rock band',
          created_at: '2026-09-24',
        },
        {
          id: '20',
          name: 'Mulberry',
          unique_name: 'Morus spp.',
          description: 'Deciduous, but can be evergreen in tropical climates.',
          notes:
            'With time and patience the mulberry leaf becomes a silk gown. (Chinese proverb)',
          created_at: '2026-09-24',
        },
      ],
      total: 20,
    });
  }),
];
