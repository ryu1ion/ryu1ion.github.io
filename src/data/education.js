import kaistLogo from '../assets/logos/kaist.svg';
import wasedaLogo from '../assets/logos/waseda.svg';
import shuLogo from '../assets/logos/shanghai-university.svg';

export const education = [
  {
    university: 'Korea Advanced Institute of Science and Technology',
    shortName: 'KAIST',
    link: 'https://www.kaist.ac.kr/en/',
    logo: kaistLogo,
    degree: 'M.S. in Computer Science',
    college: 'School of Computing',
    period: '2025.09 – Present',
    location: 'Republic of Korea',
    details: [
      'Advisor: Prof. Dongman Lee',
      'Multi-Agent Systems · Efficient Multimodal Inference',
    ],
  },
  {
    university: 'Waseda University',
    shortName: 'Waseda University',
    link: 'https://www.waseda.jp/top/en/',
    logo: wasedaLogo,
    degree: 'Exchange Program in Computer Science and Engineering',
    college: '',
    period: '2024.10 – 2025.03',
    location: 'Japan',
    details: [],
  },
  {
    university: 'Shanghai University',
    shortName: 'Shanghai University',
    link: 'https://www.shu.edu.cn/',
    logo: shuLogo,
    logoClass: 'logo-shu',
    degree: 'B.Eng. in Computer Science and Technology',
    college: '',
    period: '2021 – 2025',
    location: 'China',
    details: [
      'GPA: 3.75 / 4.0 (91.58 / 100) · Rank: Top 4%',
      'Thesis: Research on Key Technologies and Implementation of Natural Scene Image Inpainting',
    ],
  },
];
