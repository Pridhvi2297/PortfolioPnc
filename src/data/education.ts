import { Education, Award } from '../types';
import gvsu from '../assets/images/GVSU.jpg';
import jntuh from '../assets/images/jntuh.png';

export const education: Education[] = [
  {
    institution: 'Grand Valley State University',
    degree: 'Master of Science',
    field: 'Computer Science',
    year: '2022 - 2023',
    logoUrl: gvsu
  },
  {
    institution: 'Jawaharlal Nehru Technological University Hyderabad',
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    year: '2014 - 2018',
    logoUrl: jntuh
  }
];

export const awards: Award[] = [

  {
    title: 'Best Employee',
    issuer: 'Amazon & T-Mobile',
    date: '2020 & 2024',
    description: 'Recognized for exceptional performance and leadership.'
  },
  {
    title: '3D Printer Innovation Award',
    issuer: 'ABVP',
    date: '2018',
    description: 'Recognized for innovative use of 3D printing technology.'
  },
  {
    title: 'Entrepreneurship and Skill Development Programme (ESDP)',
    issuer: 'Ministry of Micro, small & Medium Enterprises, GOV of India',
    date: '2018',
    description: 'Completed entrepreneurship and skill development program.'
  },
  {
    title: 'ISRO Workshop',
    issuer: 'Indian Space Research Organisation',
    date: '2017',
    description: 'Completed workshop on satellite communication systems and data processing.'
  }
];