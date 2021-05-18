$(document).ready(() => {
    // const init = () => {
    //     const inputs = inputs();
    // }

    // const inputs = () => {

    // }
    $("#start").click(() => {

        $("#calculate").click(() => {
            const petType = $("#pet-type option:selected").text();
            const petWeight = $("#pet-weight option:selected").text();
            const petAge = parseInt($("#pet-age").val());

            const petInfo = { petType, petWeight, petAge };

            petType === "Dog" ? dogCalculator(petInfo) : catCalculator(petInfo);
        });

    });

    const dogCalculator = petInfo => {
        console.log("dog")
        console.log(petInfo.petWeight)
        // const { petWeight } = petInfo;
        switch (petInfo.petWeight) {
            case "20 lbs or less":
                tinyDog(petInfo);
                break;
            case "21-50 lbs":
                littleDog(petInfo);
                break;
            case "51-100 lbs":
                mediumDog(petInfo);
                break;
            default:
                bigDog(petInfo);
                break;
        }
    }

    const tinyDog = petInfo => {
        console.log(petInfo.petAge)
        let humanYearsArr = [15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 69, 72, 76, 80];
        let petIndex = petInfo.petAge - 1;

        const humanYears = humanYearsArr[petIndex];
        console.log(humanYears)

        $("#output").text(humanYears)
    }

    const littleDog = petInfo => {
        console.log(petInfo.petAge)
        let humanYearsArr = [15, 24, 28, 32, 36, 42, 47, 51, 56, 60, 65, 69, 74, 78, 80, 83, 87];
        let petIndex = petInfo.petAge - 1;

        const humanYears = humanYearsArr[petIndex];
        console.log(humanYears)

        $("#output").text(humanYears)
    }

    const mediumDog = petInfo => {
        console.log(petInfo.petAge)
        let humanYearsArr = [15, 24, 28, 32, 36, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 99];
        let petIndex = petInfo.petAge - 1;

        const humanYears = humanYearsArr[petIndex];
        console.log(humanYears)

        $("#output").text(humanYears)
    }

    const bigDog = petInfo => {
        console.log(petInfo.petAge)
        let humanYearsArr = [12, 22, 31, 38, 45, 49, 56, 64, 71, 79, 86, 93, 100, 107, 114, 121];
        let petIndex = petInfo.petAge - 1;

        const humanYears = humanYearsArr[petIndex];
        console.log(humanYears)

        $("#output").text(humanYears)
    }



    const catCalculator = petInfo => {
        console.log("cat")
    }
});


