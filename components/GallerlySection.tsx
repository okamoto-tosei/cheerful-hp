import type { NextPage } from 'next'

export const GallerySection: NextPage = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <img src="/common/feather.webp" alt="" />
        <h3>our gallery</h3>
      </div>

      <div className="box-container">
        <img src="/gallery/gallery_1.webp" alt="吉野のよもぎ" />
        <img src="/gallery/gallery_2.webp" alt="お店の中の写真" />
        <img src="/gallery/gallery_3.webp" alt="お店の看板" />
        <img src="/gallery/gallery_4.webp" alt="お店の中の写真" />
        <img src="/gallery/gallery_5.webp" alt="お店の中の写真" />
        <img src="/gallery/gallery_6.webp" alt="お店の暖簾" />
      </div>
    </section>
  )
}
