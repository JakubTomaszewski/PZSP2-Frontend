import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CourseSwitch = ({
  courseCode,
  handleCourseSelect,
  getCourseCodes,
  courseCodeList,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Kod kursu</InputLabel>
      <Select
        value={courseCode}
        label="Kod kursu"
        onChange={handleCourseSelect}
        onOpen={getCourseCodes}
        required
      >
        {courseCodeList.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CourseSwitch;
