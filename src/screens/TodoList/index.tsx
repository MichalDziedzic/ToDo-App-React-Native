import React, { FC } from "react";
import { Button, View } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

const WrapperToDo = styled.View`
  flex: 4;
  background: red;
`;
const AddTask = styled.View`
  flex: 2;
  background: green;
  align-items: center;
  justify-content: center;
`;

interface ITodoListProps {}

const TodoList = () => {
  return (
    <View>
      <WrapperToDo></WrapperToDo>
      <AddTask></AddTask>
    </View>
  );
};

export default TodoList;
