"use strict";

var initModule = sourceRequire("lib/pipeline/init");

describe("InitPipelineComponent", function () {

  it("adds an instance of ODataState to the context state", function () {

    var init = new initModule.InitPipelineComponent({});

    var x = 0;
    x.should.equal(0);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVsaW5lL2luaXQuc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUVwRCxRQUFRLENBQUMsdUJBQXVCLEVBQUUsWUFBVzs7QUFFM0MsSUFBRSxDQUFDLHFEQUFxRCxFQUFFLFlBQVc7O0FBRW5FLFFBQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUV0RCxRQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixLQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUVuQixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoicGlwZWxpbmUvaW5pdC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGluaXRNb2R1bGUgPSBzb3VyY2VSZXF1aXJlKFwibGliL3BpcGVsaW5lL2luaXRcIik7XG5cbmRlc2NyaWJlKFwiSW5pdFBpcGVsaW5lQ29tcG9uZW50XCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwiYWRkcyBhbiBpbnN0YW5jZSBvZiBPRGF0YVN0YXRlIHRvIHRoZSBjb250ZXh0IHN0YXRlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgaW5pdCA9IG5ldyBpbml0TW9kdWxlLkluaXRQaXBlbGluZUNvbXBvbmVudCh7fSk7XG5cbiAgICBsZXQgeCA9IDA7XG4gICAgeC5zaG91bGQuZXF1YWwoMCk7XG5cbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
