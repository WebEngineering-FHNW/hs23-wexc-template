import { TestSuite }       from "../../kolibri/util/test.js";
import { DayController }   from "./dayController.js";
import { WeekController }  from "./weekController.js";

const weekControllerSuite = TestSuite("weekController");

weekControllerSuite.add("initial", assert => {
    const controller = WeekController();
    let total;
    controller.onTotalWeekMinutesChanged(val => total = val);
    assert.is(total, 0);

    controller.addDayController(DayController());
    assert.is(total, 8 * 60);

    const dayController = DayController();
    controller.addDayController(dayController);
    assert.is(total, 2 * 8 * 60);
    dayController.setAmStart(8 * 60 + 1);  // changing the day values
    assert.is(total, 2 * 8 * 60 -1);       // changes the total

});

weekControllerSuite.run();
