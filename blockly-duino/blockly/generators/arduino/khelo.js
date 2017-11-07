goog.provide('Blockly.Arduino.khelo');
	
goog.require('Blockly.Arduino');

Blockly.Arduino['khelo_keyboard'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.definitions_['define_keyboard'] = '#include <Keyboard.h>\n';
  Blockly.Arduino.setups_['setup_keyboard_']= 'Keyboard.begin();\n';
  // TODO: Assemble Arduino into code variable.
  var code = 'Keyboard.write('+dropdown_pin_options+');\n';
  return code;
};

Blockly.Arduino['khelo_buzzer'] = function(block) {
  var dropdown_notes = block.getFieldValue('notes');
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var value_time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'tone('+dropdown_pin_options+','+dropdown_notes+','+value_time+');\n';
  return code;
};
Blockly.Arduino['khelo_servo'] = function(block) {
  var angle_degree = block.getFieldValue('Degree');
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin_options] = 'Servo servo_' + dropdown_pin_options + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_pin_options] = 'servo_' + dropdown_pin_options + '.attach(' + dropdown_pin_options + ');\n';

  // TODO: Assemble Arduino into code variable.
  var code = 'servo_' + dropdown_pin_options + '.write(' + angle_degree + ');\n';
  return code;
};


Blockly.Arduino['khelo_potentiometer'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'analogRead('+dropdown_pin_options+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['khelo_potentiometer_range'] = function(block) {
  var value_start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
  var value_stop = Blockly.Arduino.valueToCode(block, 'STOP', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'if(analogRead('+dropdown_pin_options+')>'+value_start+' && analogRead('+dropdown_pin_options+')<'+value_stop+')\n{\n'+statements_do+'\n}\n';
  return code;
};

Blockly.Arduino['khelo_light'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'analogRead('+dropdown_pin_options+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['khelo_light_range'] = function(block) {
  var value_start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
  var value_stop = Blockly.Arduino.valueToCode(block, 'STOP', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'if(analogRead('+dropdown_pin_options+')>'+value_start+' && analogRead('+dropdown_pin_options+')<'+value_stop+')\n{\n'+statements_do+'\n}\n';
  return code;
};

Blockly.Arduino['khelo_proximity'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'analogRead('+dropdown_pin_options+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['khelo_proximity_range'] = function(block) {
  var value_start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
  var value_stop = Blockly.Arduino.valueToCode(block, 'STOP', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'if(analogRead('+dropdown_pin_options+')>'+value_start+' && analogRead('+dropdown_pin_options+')<'+value_stop+')\n{\n'+statements_do+'\n}\n';
  return code;
};

Blockly.Arduino['khelo_water_detector'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  // TODO: Assemble Arduino into code variable.
  var code = 'if(analogRead('+dropdown_pin_options+')>100)\n{\n '+statements_do+'\n}\n';
  return code+'\n';
};


Blockly.Arduino['khelo_tap_detector'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);';
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  // TODO: Assemble Arduino into code variable.
  var code = 'if(analogRead('+dropdown_pin_options+')>800)\n{\n '+statements_do+'\n}\n';
  return code+'\n';
};


Blockly.Arduino['khelo_distance'] = function(block) {
  var dropdown_pin_options = String(block.getFieldValue('pin_options'));
  var echo_pin;
  var trig_pin;
  if(dropdown_pin_options === "2 and 4")
  {
	  echo_pin='2';
	  trig_pin='4';
  }
  if(dropdown_pin_options === "4 and 7")
  {
	  echo_pin='4';
	  trig_pin='7';
  }
 
  Blockly.Arduino.setups_['setup_input']= 'pinMode('+echo_pin+',INPUT);\n pinMode('+trig_pin+',OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'pulseIn('+echo_pin+',HIGH)/58;\ndigitalWrite('+trig_pin+',LOW);\ndelayMicroseconds(4);\ndigitalWrite('+trig_pin+',HIGH);\ndelayMicroseconds(40);\ndigitalWrite('+trig_pin+',LOW)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['khelo_distance_range'] = function(block) {
  var value_start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
  var value_stop = Blockly.Arduino.valueToCode(block, 'STOP', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin_options = String(block.getFieldValue('pin_options'));
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  Blockly.Arduino.definitions_['set_dist_var'] = 'int dist = 0;\n';
  var echo_pin;
  var trig_pin;
  if(dropdown_pin_options === "2 and 4")
  {
	  echo_pin='2';
	  trig_pin='4';
  }
  if(dropdown_pin_options === "4 and 7")
  {
	  echo_pin='4';
	  trig_pin='7';
  }
  Blockly.Arduino.setups_['setup_input']= 'pinMode('+echo_pin+',INPUT);\n pinMode('+trig_pin+',OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'digitalWrite('+trig_pin+',LOW);\ndelayMicroseconds(4);\ndigitalWrite('+trig_pin+',HIGH);\ndelayMicroseconds(40);\ndigitalWrite('+trig_pin+',LOW);\ndist=pulseIn('+echo_pin+',HIGH)/58;\nif(dist>'+value_start+' && dist<'+value_stop+')\n{'+statements_do+'\n}\n';
  return code;
};

Blockly.Arduino['khelo_led'] = function(block) {
  var dropdown_led_options = block.getFieldValue('LED_options');
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code ='if (\"'+dropdown_led_options+'\"== "on")'+'\ndigitalWrite('+dropdown_pin_options+',HIGH);'+'\n\nif (\"'+dropdown_led_options+'\"=="off")'+'\ndigitalWrite('+dropdown_pin_options+',LOW);'+'\n';
  return code;
};

Blockly.Arduino['khelo_blink_led'] = function(block) {
  var value_times = 500 / (Blockly.Arduino.valueToCode(block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC));
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = 'digitalWrite('+dropdown_pin_options+',HIGH);\ndelay('+value_times+');\ndigitalWrite('+dropdown_pin_options+',LOW);\ndelay('+value_times+');\n';
  return code;
};

Blockly.Arduino['khelo_button'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var dropdown_button_state = block.getFieldValue('button_state');
  var statements_button = Blockly.Arduino.statementToCode(block, 'button');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);'; 
  // TODO: Assemble Arduino into code variable.
  var code = 'if(digitalRead('+dropdown_pin_options+')=='+dropdown_button_state+')\n{ \n '+statements_button+'\n}';
  return code+"\n";
};

Blockly.Arduino['khelo_sound_detector'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  Blockly.Arduino.definitions_['set_mean_var']='int mean = 0;\n';
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  Blockly.Arduino.setups_['setup_input']= 'pinMode('+dropdown_pin_options+', INPUT);\nfor(int i=0;i<200;i++)\n{\n int temp=analogRead('+dropdown_pin_options+');\nif(temp>mean)\nmean=temp;\n}\n';
  // TODO: Assemble Arduino into code variable.
  var code = 'if(analogRead('+dropdown_pin_options+')>mean)\n{\n'+statements_do+'\n}\n';
  return code;
};

Blockly.Arduino['khelo_touch'] = function(block) {
  var dropdown_line_options = block.getFieldValue('line_options');
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var pin_line1;
  var pin_line2;
  if(dropdown_pin_options === "2 and 4")
  {
	  pin_line1='2';
	  pin_line2='4';
  }
  if(dropdown_pin_options === "4 and 7")
  {
	  pin_line2='4';
	  pin_line2='7';
  }
  Blockly.Arduino.setups_['setup_input']= 'pinMode('+pin_line1+',INPUT);\n pinMode('+pin_line2+',INPUT);';
  var statements_do = Blockly.Arduino.statementToCode(block, 'DO');
  // TODO: Assemble Arduino into code variable.
  var code = 'if('+dropdown_line_options+'==1 && digitalRead('+pin_line1+')== HIGH)\n{\n'+statements_do+'\n}\nif('+dropdown_line_options+'==2 && digitalRead('+pin_line2+')== HIGH)\n{\n'+statements_do+'\n}\nif('+dropdown_line_options+'==12 && digitalRead('+pin_line1+')== HIGH && digitalRead('+pin_line2+')== HIGH)\n{\n'+statements_do+'\n}\n';
  return code;
};
Blockly.Arduino['khelo_motor'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_speed = block.getFieldValue('speed');
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var pin_line1;
  var pin_line2;
  if(dropdown_pin_options == 56)
  {
	  pin_line1='5';
	  pin_line2='6';
  }
  if(dropdown_pin_options == 39)
  {
	  pin_line1='3';
	  pin_line2='9';
  }
  Blockly.Arduino.setups_['setup_input']= 'pinMode('+pin_line1+',OUTPUT);\n pinMode('+pin_line2+',OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = '';
  if(dropdown_direction== 1)
	  code= "analogWrite("+pin_line1+","+dropdown_speed+");\n digitalWrite("+pin_line2+",LOW);\n";
  if(dropdown_direction== 2)
	  code= "analogWrite("+pin_line2+","+dropdown_speed+");\n digitalWrite("+pin_line1+",LOW);\n";
  return code;
};

Blockly.Arduino['khelo_motor_stop'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var pin_line1;
  var pin_line2;
  if(dropdown_pin_options == 56)
  {
	  pin_line1='5';
	  pin_line2='6';
  }
  if(dropdown_pin_options == 39)
  {
	  pin_line1='3';
	  pin_line2='9';
  }
  Blockly.Arduino.setups_['setup_input']= 'pinMode('+pin_line1+',OUTPUT);\n pinMode('+pin_line2+',OUTPUT);';
  // TODO: Assemble Arduino into code variable.
  var code = "digitalWrite("+pin_line1+",LOW);\n digitalWrite("+pin_line2+",LOW);\n";
  return code;
};

Blockly.Arduino['khelo_serial'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin_options]= 'pinMode(' + dropdown_pin_options + ', INPUT);\n Serial.begin(9600);';
  // TODO: Assemble Arduino into code variable.
  var code = 'Serial.println(analogRead('+dropdown_pin_options+');\n';
  return code;
};