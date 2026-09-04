export const profile = {
  name: 'Tianhao Chen',
  givenName: 'Tianhao',
  familyName: 'Chen',
  title: 'M.S. Student in Computer Science',
  affiliation: 'KAIST · School of Computing',
  location: 'Republic of Korea',
  email: 'thchen@kaist.ac.kr',
  statement:
    'I study how multimodal agents can communicate, perceive, and decide efficiently in interactive environments.',
  bio: [
    'I am an M.S. student in the School of Computing at KAIST, advised by Prof. Dongman Lee. My research focuses on multi-agent systems and efficient multimodal inference.',
    'My recent work explores how intelligent agents can share information, preserve decision-critical visual context, and remain responsive under real-time constraints—from collaborative driving and multimodal cache compression to video understanding and generation.',
  ],
  interests: [
    'Multi-Agent Systems',
    'Efficient Multimodal Inference',
    'Collaborative Driving',
    'Interactive Video Generation',
  ],
  rotatingTopics: [
    'Multi-Agent Systems',
    'Efficient Multimodal Inference',
    'Collaborative Driving',
    'Interactive Video Generation',
  ],
  status: 'Exploring efficient communication and perception for multimodal agents.',
  links: {
    cv: 'cv.pdf',
    scholar: 'https://scholar.google.com/citations?user=JfSu3qwAAAAJ&hl=zh-TW',
    github: 'https://github.com/ryu1ion',
    email: 'mailto:thchen@kaist.ac.kr',
    advisor: 'https://cds.kaist.ac.kr/people/dongmanlee/',
  },
} as const;

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
] as const;
