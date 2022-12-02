import type { NextPage } from 'next'

export const StaffSection: NextPage = () => {
  return (
    <section className="staff" id="staff">
      <div className="heading">
        <img src="facility_main.jpg" alt="" />
        <h3>our staff</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img src="staff_1.jpg" alt="" />
          <h3>森末　ちえこ</h3>
        </div>

        <div className="box">
          <img src="staff_2.jpg" alt="" />
          <h3>南平　たかみ</h3>
        </div>
      </div>
    </section>
  )
}
