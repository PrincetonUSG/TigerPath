import React from 'react';
import Semester from 'components/Semester';
import styled from 'styled-components';
import { getSemesterNames } from 'utils/SemesterUtils';

const Semesters = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0.25rem;
  height: 100%;
  overflow-y: auto;
`;

const ScheduleSemester = styled(Semester)`
  display: flex;
  flex-direction: column;
  width: calc(25% - 0.5rem);
  height: calc(50% - 0.5rem);
  margin: 0.25rem;
`;

const Schedule = (props) => {
  const { schedule, profile, setSchedule } = props;

  const renderSemesters = () => {
    if (!profile || !profile.classYear) return [];

    let semesterNames = getSemesterNames(profile.classYear);
    let semesters = semesterNames.map((semName, index) => {
      let semId = `sem${index}`;
      return (
        <ScheduleSemester
          key={semId}
          schedule={schedule}
          setSchedule={setSchedule}
          semesterIndex={index}
          semName={semName}
        />
      );
    });
    return semesters;
  };

  return <Semesters id="semesters">{renderSemesters()}</Semesters>;
};

export default Schedule;
