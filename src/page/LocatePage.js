import '../pagecss/Locatepage.css';
function Locate() {
    return (<>
        <h3>ชื่อ นามสกุล</h3>
        <p><input id="Border" type="text" /></p>
        <h3>ที่อยู่</h3>
        <p><input id="BigBox" type="text" /></p>
        <h3>ประเทศ</h3>
        <p><input id="Border" type="text" /></p>
        <div>
            <div>
                <label>ตำบล/แขวง</label>
                <label id="Space">อำเภอ/เขต</label>
                <label id="SpaceJ">จังหวัด</label>
            </div>
            <input id="BorderSmaller" type="text" />
            <input id="SpaceInput" type="text" />
            <input id="SpaceInputJ" type="text" />
        </div>


        <h3>รหัสไปรษณีย์</h3>
        <p><input id="BorderSmaller" type="text" /></p>



        <button> submit </button>
    </>);
}
export default Locate;