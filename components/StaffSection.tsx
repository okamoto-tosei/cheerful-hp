import type { NextPage } from 'next'

export const StaffSection: NextPage = () => {
  return (
    <section className="staff" id="staff">
      <div className="heading">
        <img src="/common/feather.webp" alt="" />
        <h3>our staff</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img src="/staff/staff_1.webp" alt="ちあふるのスタッフ、森末ちえこの写真" />
          <h3>森末　ちえこ</h3>
        </div>

        <div className="box">
          <img src="/staff/staff_2.webp" alt="ちあふるのスタッフ、南平たかみの写真" />
          <h3>南平　たかみ</h3>
        </div>
      </div>
    </section>
  )
}
