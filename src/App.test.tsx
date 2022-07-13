import {render, screen} from "@testing-library/react";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('test App', () => {
  render(<MemoryRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </MemoryRouter>
  )
  test('displaying input value', async () => {

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.queryByDisplayValue(/garry/i)).toBeNull()

    await userEvent.type(screen.getByRole('textbox'), 'garry')

    expect(screen.getByDisplayValue(/garry/i)).toBeInTheDocument()
  })
  test('input in focus', () => {

    const input = screen.getByRole('textbox')

    expect(input).not.toHaveFocus()
    input.focus()
    expect(input).toHaveFocus()
  })
  test('select option', async () => {
    const isOption = (htmlElement: HTMLElement): htmlElement is HTMLOptionElement => {
      return htmlElement.tagName.toLowerCase() === 'option'
    }

    const selectOptionTest = async (name: string, value: string, combobox: HTMLElement) => {
      await userEvent.selectOptions(combobox, value)
      const optionName = screen.getByText(name)
      const nameIsOptionElement = isOption(optionName)
      expect(nameIsOptionElement).toBeTruthy()
      if (!nameIsOptionElement) return
      expect(optionName.selected).toBeTruthy()
    }

    const [first, second] = screen.getAllByRole('combobox')

    await selectOptionTest('all', '*', first)
    await selectOptionTest('art', 'art', first)
    await selectOptionTest('biography', 'biography', first)
    await selectOptionTest('computers', 'computers', first)
    await selectOptionTest('history', 'history', first)
    await selectOptionTest('medical', 'medical', first)
    await selectOptionTest('poetry', 'poetry', first)

    await selectOptionTest('relevance', 'relevance', second)
    await selectOptionTest('newest', 'newest', second)
  })
})

