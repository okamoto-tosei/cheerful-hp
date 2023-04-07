/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import type { Props as Menu } from 'pages/index'

type Props = {
  menus: Menu['menus']
}

export const MenuSection: NextPage<Props> = ({ menus }) => {
  return (
    <section className="menu" id="menu">
      <div className="heading">
        <img src="facility_main.jpg" alt="popular menu" />
        <h3>popular menu</h3>
      </div>

      <div className="box-container">
        {menus.map((menu) => (
          <div key={menu.id} className="box">
            <img
              className="mask"
              src={menu.is_img ? `/menu/${menu.img_key}menu.jpg` : '/noImage/noimg01.gif'}
              alt={menu.name}
            />
            <h3>{menu.name}</h3>
            <p>price: ¥{menu.price}(税込)</p>
            <p>time: {menu.time}分</p>
          </div>
        ))}
      </div>
    </section>
  )
}
