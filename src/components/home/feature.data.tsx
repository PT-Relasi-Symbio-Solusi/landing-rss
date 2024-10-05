import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import Update from '@mui/icons-material/Update'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Mudah Digunakan',
    description: 'Sistem kami dirancang agar mudah digunakan oleh siapa saja tanpa kesulitan.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Harga Terjangkau',
    description: 'Nikmati fitur lengkap dengan harga yang sangat bersahabat.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Produk Up To Date',
    description: 'Kami selalu memastikan produk terbaru dan relevan agar sesuai dengan perkembangan.',
    icon: <Update />,
  },
  {
    title: 'Konsultasi Kapan Aja',
    description: 'Dapatkan dukungan kapan pun Anda butuhkan dari tim ahli kami.',
    icon: <ContactSupportIcon />,
  },
]
