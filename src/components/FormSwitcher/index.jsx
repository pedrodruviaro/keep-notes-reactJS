import React from 'react'
import { useState } from 'react'
import {TitlePrimary} from '../Title'
import FormNewNote from '../FormNewNote'
import FormNewTodo from '../FormNewTodo'
import { FormSwitcherStyled, SelectStyled, SelectWrap } from './styles'

export default function Index() {

    const [renderForm, setRenderForm] = useState("note")

    function changeRender(event) {
        setRenderForm(event.target.value)
    }

    return (
        <FormSwitcherStyled>
            <TitlePrimary>What's up ... ? </TitlePrimary>

            <SelectWrap>
                <SelectStyled onChange={changeRender}>
                    <option value="note">Note</option>
                    <option value="todo">Todo</option>
                </SelectStyled>
            </SelectWrap>

            {renderForm === "note" ? <FormNewNote /> : <FormNewTodo />}
        </FormSwitcherStyled>
    )
}
