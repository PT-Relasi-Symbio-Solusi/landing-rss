import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Application',
    content:
      'Pembuatan aplikasi yang sangat membantu dalam kehidupan sehari-hari, sangat mudah digunakan dan sangat membantu dalam kehidupan sehari-hari.',
    user: {
      id: 1,
      name: 'Ghiga Store',
      professional: 'Application',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Application Mil',
    content:
      'Pengerjaan aplikasi yang sangat cepat dan sangat membantu dalam kehidupan sehari-hari, sangat mudah digunakan dan sangat membantu dalam kehidupan sehari-hari.',
    user: {
      id: 1,
      name: 'Hari',
      professional: 'Application',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Hosting',
    content:
      'Jasa hosting yang sangat membantu dalam kehidupan sehari-hari, sangat mudah digunakan dan sangat membantu dalam kehidupan sehari-hari.',
    user: {
      id: 1,
      name: 'Butik',
      professional: 'Jasa Hosting',
      photo: '3.jpg',
    },
  },
]
