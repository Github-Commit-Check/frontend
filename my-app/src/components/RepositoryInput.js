import styled from "styled-components";

const RepoBar = styled.input`
  font-size: 80px;
  font-weight: 100;
  color: white;
  width: 12.5em;
  height: 1em;
  background-color: ${(props) => props.bgColor};
  border: none;
  caret-color: white;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

const RepoBtn = styled.button`
  font-size: 40px;
  width: 4em;
  height: 2em;
  padding: 0;
  border: 0;
  background-color: black;
  color: #828282;
  &:hover {
    color: #4dff4d;
  }
  &:active {
    color: #828282;
  }
`;

function RepositoryInput() {
  return (
    <div className="repository-input">
      <forms
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <RepoBar type="text" bgColor={"black"} />
        <RepoBtn type="submit">Check</RepoBtn>
      </forms>
    </div>
  );
}

export default RepositoryInput;
