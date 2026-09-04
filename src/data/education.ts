import kaistLogo from '../assets/logos/kaist.svg';
import wasedaLogo from '../assets/logos/waseda.svg';
import shuLogo from '../assets/logos/shanghai-university.svg';
import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    school: 'Korea Advanced Institute of Science and Technology',
    shortName: 'KAIST',
    degree: 'M.S. in Computer Science',
    department: 'School of Computing',
    period: 'Sep 2025 — Present',
    location: 'Republic of Korea',
    logo: kaistLogo,
    logoClass: 'logo-mark',
    url: 'https://www.kaist.ac.kr/en/',
    details: [
      'Advisor: Prof. Dongman Lee',
      'Research: Multi-Agent Systems · Efficient Multimodal Inference',
    ],
  },
  {
    school: 'Waseda University',
    shortName: 'Waseda',
    degree: 'Exchange Program',
    department: 'Computer Science and Engineering',
    period: 'Oct 2024 — Mar 2025',
    location: 'Japan',
    logo: wasedaLogo,
    logoClass: 'logo-wide',
    url: 'https://www.waseda.jp/top/en/',
    details: [],
  },
  {
    school: 'Shanghai University',
    shortName: 'SHU',
    degree: 'B.Eng. in Computer Science',
    period: '2021 — 2025',
    location: 'China',
    logo: shuLogo,
    logoClass: 'logo-wide',
    url: 'https://www.shu.edu.cn/',
    details: [
      'GPA: 3.75 / 4.0 (91.58 / 100) · Rank: 4%',
      'Thesis: Research on Key Technologies and Implementation of Natural Scene Image Inpainting',
    ],
  },
];
