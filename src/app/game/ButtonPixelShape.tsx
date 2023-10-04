import { pointsArrayToPathString } from "@/src/agnostic/utils/svgUtils";
import { ButtonProps } from "@/src/frontCode/cssCommon";

function ButtonPixelShape(props: ButtonProps) {

    function handleClick() {
        if (props.handle){
            props.handle();
        }
    }

    const pointsArray1: [number, number][] = [
        [0, 0],
        [300, 0],
        [300, 25],
        [275, 25],
        [275, 50],
        [300, 50],
        [300, 75],
        [325, 75],
        [325, 100],
        [0, 100],
    ];
    const pointsArray2: [number, number][] = [
        [325, 25],
        [350, 25],
        [350, 50],
        [325, 50],
    ];
    pointsArray1.forEach(point => {
        if (point[0] > 0) {
            //point[0] -= 100;
        }
    });
    pointsArray2.forEach(point => {
        if (point[0] > 0) {
            //point[0] -= 100;
        }
    });


    const points = pointsArrayToPathString(pointsArray1);
    const points2 = pointsArrayToPathString(pointsArray2);

    const shapePath = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100"%3E%3Cpath d="${points} ${points2}" fill="orange" /%3E%3C/svg%3E`;

    return (
        <button
            type="submit"
            className="p-4 text-white text-xl font-bold"
            style={{
                background: `url('${shapePath}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                backgroundSize: "100% 100%",
                transition: "background-color 0.3s ease",
            }}
            disabled={props.disabled}
            onClick={handleClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = `url('${shapePath.replace('orange', 'green')}')`;
                e.currentTarget.style.backgroundRepeat = 'no-repeat';
                e.currentTarget.style.backgroundPosition = 'left';
                e.currentTarget.style.backgroundSize = "100% 100%";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = `url('${shapePath}')`;
                e.currentTarget.style.backgroundRepeat = 'no-repeat';
                e.currentTarget.style.backgroundPosition = 'left';
                e.currentTarget.style.backgroundSize = "100% 100%";
            }}
        >
            {props.children}
        </button>
    );
}