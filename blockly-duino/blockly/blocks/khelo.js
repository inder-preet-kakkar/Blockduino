goog.provide('Blockly.Blocks.khelo');

goog.require('Blockly.Blocks');

Blockly.Blocks.khelo.HUE = 270;


Blockly.Blocks['khelo_proximity_options'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If proximity is between")
        .appendField(new Blockly.FieldDropdown([["o to 3", "0-3"], ["3 to 6", "3-6"], ["6 to 9", "6-9"]]), "Range")
        .appendField("cm on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("Do")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['khelo_keyboard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Press")
        .appendField(new Blockly.FieldDropdown([["Right arrow", "0xD7"], ["Left arrow", "0xD8"], ["Up arrow", "0xDA"], ["Down arrow", "0xD9"], ["Ctrl", "0x80"], ["Backspace", "0xB2"], ["Spacebar", " "], ["A", "0x61"], ["D", "0x64"], ["S", "0x73"], ["W", "0x77"]]), "pin_options")
        .appendField("key on keyboard");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play note")
        .appendField(new Blockly.FieldDropdown([["Sa", "1900"], ["Re", "2030"], ["Ga", "2270"], ["Ma", "2900"], ["Pa", "3038"], ["Dha", "3400"], ["Ni", "3830"]]), "notes")
        .appendField("on buzzer at pin")
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"]]), "pin_options");
    this.appendValueInput("TIME")
        .appendField("for ");
    this.appendDummyInput()
        .appendField("milliseconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks["khelo_potentiometer"] = {
  init: function() {
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("Read dimmer at pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.setOutput(true, "Number");
      }
};

Blockly.Blocks['khelo_potentiometer_range'] = {
  init: function() {
    this.appendValueInput("START")
        .appendField("If dimmer is between");
    this.appendValueInput("STOP")
        .appendField("and");
    this.appendDummyInput()
        .appendField("on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("DO")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read light intensity on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.setOutput(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_light_range'] = {
  init: function() {
    this.appendValueInput("START")
        .appendField("If light intensity is between");
    this.appendValueInput("STOP")
        .appendField("and");
    this.appendDummyInput()
        .appendField("on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("DO")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['khelo_proximity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read proximity on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_proximity_range'] = {
  init: function() {
    this.appendValueInput("START")
        .appendField("If proximity is between");
    this.appendValueInput("STOP")
        .appendField("and");
    this.appendDummyInput()
        .appendField("on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("DO")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["ON", "on"], ["OFF", "off"]]), "LED_options")
        .appendField("at pin")
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"]]), "pin_options");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_blink_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blink LED");
    this.appendValueInput("TIMES");
    this.appendDummyInput()
        .appendField("times every 1 second on pin ")
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"]]), "pin_options");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_water_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If water is detected  on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("DO")
		.appendField("Do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['khelo_tap_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If tap is detected  on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("DO")
		.appendField("Do");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_sound_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If sound is detected on the mic at pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.appendStatementInput("DO")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read distance in centimeters from ultrasonic ranger on pin")
        .appendField(new Blockly.FieldDropdown([["2, 4", "2 and 4"], ["4, 7", "4 and 7"]]), "pin_options");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_distance_range'] = {
  init: function() {
    this.appendValueInput("START")
        .appendField("If distance is between");
    this.appendValueInput("STOP")
        .appendField("and");
    this.appendDummyInput()
        .appendField("cm from ultrasonic ranger on pin")
        .appendField(new Blockly.FieldDropdown([["2, 4", "2 and 4"], ["4, 7", "4 and 7"]]), "pin_options");
    this.appendStatementInput("DO")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_button'] = {
  init: function() {
    this.appendStatementInput("button")
        .setCheck(null)
        .appendField("If button at pin ")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["2", "2"], ["4", "4"], ["7", "7"]]), "pin_options")
        .appendField("is ")
        .appendField(new Blockly.FieldDropdown([["Pressed", "HIGH"], ["Not pressed", "lowLOW"]]), "button_state")
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Move servo to degree ")
        .appendField(new Blockly.FieldAngle("90"), "Degree")
        .appendField("(0 - 180) on pin")
        .appendField(new Blockly.FieldDropdown([["10", "10"], ["9", "9"], ["3", "3"], ["5", "5"], ["6", "6"]]), "pin_options");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If touch is detected at")
        .appendField(new Blockly.FieldDropdown([["Line1", "1"], ["Line2", "2"], ["Line1 & 2", "12"]]), "line_options")
        .appendField("at pins")
        .appendField(new Blockly.FieldDropdown([["2, 4", "2 and 4"], ["4, 7", "4 and 7"], ["option", "OPTIONNAME"]]), "pin_options");
    this.appendStatementInput("DO")
        .appendField("Do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate the motor")
        .appendField(new Blockly.FieldDropdown([["Clockwise", "1"], ["Anti-clockwise", "2"]]), "direction")
        .appendField("clockwise with speed")
        .appendField(new Blockly.FieldDropdown([["Slow", "150"], ["Medium", "700"], ["Fast", "1023"]]), "speed")
        .appendField("on pin")
        .appendField(new Blockly.FieldDropdown([["5, 6", "56"], ["3, 9", "39"]]), "pin_options");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop rotating the motor on pins")
        .appendField(new Blockly.FieldDropdown([["5, 6", "56"], ["3, 9", "39"]]), "pin_options");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_serial'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["Number", "String"])
        .appendField("Show me the analog reading on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"]]), "pin_options");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.khelo.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
