import general from '../src/Images/general.jpg';
import clutch from '../src/Images/clutch.jpg';
import fork from '../src/Images/fork.jpg';
import engine from '../src/Images/engine.png';
import gear from '../src/Images/gear.jpg';
import color from '../src/Images/color.png';
const Sdata =[
    {

        srnumber:"1",
        imgsrc:clutch,
        title:"Clutch Oral",
        description:<>
        <ol className="work-list">
            <li>Clutch clean</li>
            <li>Clutch checkup</li>
            <li>Clutch variator checkup</li>
        </ol></>,
        labour:"250 ₹"
    },
    {
        srnumber:"2",
        imgsrc:general,
        title:"General Checkup",
        description:<>
        <ol className="work-list">
            <li>Plug & filter clean</li>
            <li>Carborater tuneup(adjust)</li>
            <li>Break tight & light check</li>
            <li>Oil check and change</li>
            <li>Battery check and Charging</li>
        </ol></>,
        labour:"250 ₹"
    },
    
    {
        srnumber:"3",
        imgsrc:fork,
        title:"Fork Oral",
        description:<>
        <ol className="work-list">
            <li>Fork checkup</li>
            <li>Coneset checkup</li>
            <li>Replace coneset(if required)</li>
        </ol></>,
        labour:"250 ₹"
    },
    {
        srnumber:"4",
        imgsrc:gear,
        title:"Gear-box Oral",
        description:<>
        <ol className="work-list">
            <li>Gear checkup(replace if required)</li>
            <li>Bearing checkup(replace if required)</li>
        </ol></>,
        labour:"300 ₹"
    },
    {
        srnumber:"5",
        imgsrc:engine,
        title:"Engine Oral",
        description:<>
        <ol className="work-list">
            <li>All engine parts clean</li>
            <li>Checkup</li>
            <li>Refitting</li>
        </ol></>,
        labour:"1500 ₹"
    },
    {
        srnumber:"6",
        imgsrc:color,
        title:"Color Remove & Refitting",
        description:<>
            <ol className="work-list">
                <li>Disable all parts for coloring</li>
                <li>Refitting of all parts after coloring</li>
                
            </ol>
        </>,
        labour:"1500 ₹"
    },
];
export default Sdata;