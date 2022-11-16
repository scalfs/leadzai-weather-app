import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

export interface SelectProps {
  label: string
  selected: string
  options: { id: string; name: string }[]
  onSelectOption: (id: string) => void
}

export function Select({
  label,
  options,
  selected,
  onSelectOption
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = useMemo(() => {
    return options.find(({ id }) => id === selected)?.name || ''
  }, [options, selected])

  const onBlur = () => setIsOpen(false)
  const onTriggerClick = () => setIsOpen((open) => !open)
  const onOptionClick = (id: string) => {
    onSelectOption(id)
    setIsOpen(false)
  }

  useEffect(() => {
    const ref = containerRef.current
    const handler = (e: KeyboardEvent) => {
      if (e.target !== ref) return
      let newFocused
      switch (e.key) {
        case 'Enter':
        case 'Space':
          setIsOpen((open) => !open)
          if (isOpen) onSelectOption(options[focusedIndex].id)
          break
        case 'Escape':
          setIsOpen(false)
          break
        case 'ArrowUp':
        case 'ArrowDown':
          newFocused = focusedIndex + (e.code === 'ArrowDown' ? 1 : -1)
          if (newFocused >= 0 && newFocused < options.length) {
            setFocusedIndex(newFocused)
          }
      }
    }
    ref?.addEventListener('keydown', handler)

    return () => {
      ref?.removeEventListener('keydown', handler)
    }
  }, [isOpen, focusedIndex, options, onSelectOption])

  useEffect(() => {
    // Set the focus to the selected item every time the select is opened
    if (isOpen) {
      const selectedIndex = options.findIndex(
        (opt) => opt.name === selectedOption
      )
      setFocusedIndex(selectedIndex)
    }
  }, [isOpen, selectedOption, options])

  return (
    <Container tabIndex={0} ref={containerRef} {...{ isOpen, onBlur }}>
      <label id="select-label" hidden>
        {label}
      </label>
      <Trigger
        role="combobox"
        aria-controls="select"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={onTriggerClick}
        aria-labelledby="select-label"
      >
        <Value>{selectedOption}</Value>
        <Caret />
      </Trigger>

      <Content
        id="select"
        role="listbox"
        {...{ isOpen }}
        aria-labelledby="select-label"
        aria-activedescendant={options[focusedIndex]?.id}
      >
        {options.map(({ id, name }, index) => (
          <Option
            id={id}
            key={id}
            role="option"
            aria-selected={id === selected}
            isFocused={index === focusedIndex}
            onClick={(e) => {
              e.stopPropagation()
              onOptionClick(id)
            }}
          >
            {name}
          </Option>
        ))}
      </Content>
    </Container>
  )
}

const Container = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    height: 36px;
    width: 118px;
    position: relative;

    font-size: ${theme.font.sizes.sm};
    box-shadow: 0px 4px 8px -2px ${theme.colors.shadow};

    color: ${theme.colors.onSurfaceVariant};
    background-color: ${theme.colors.surfaceVariant};

    &:focus-visible {
      outline-offset: 2px;
      border-radius: ${!isOpen ? '4px' : 0};
      outline: ${!isOpen ? `2px solid ${theme.colors.outline}` : 'none'};
    }
  `}
`

const Trigger = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xs};
    padding: 0 ${theme.spacings.sm};

    &:hover {
      background-color: ${theme.colors.accent};
    }
  `}
`

const Value = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Caret = styled.div`
  ${({ theme }) => css`
    translate: 0 25%;
    border: 0.4em solid transparent;
    border-top-color: ${theme.colors.onSurfaceVariant};
  `}
`

const Content = styled.ul<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    all: unset;
    list-style: none;
    overflow-y: auto;
    display: ${isOpen ? 'block' : 'none'};
    font-size: ${theme.font.sizes.xs};
    padding: ${theme.spacings.xs} 0px;
    background-color: ${theme.colors.surfaceVariant};

    box-shadow: inset 0 8px 6px -6px ${theme.colors.shadow},
      0px 4px 8px -2px ${theme.colors.shadow};

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
  `}
`

const Option = styled.li<{ isFocused: boolean }>`
  ${({ theme: { colors, spacings }, isFocused }) => css`
    display: flex;
    user-select: none;
    align-items: center;
    padding: ${spacings.xs};
    padding-left: ${spacings.lg};

    :hover {
      background-color: ${colors.accent};
    }

    background-color: ${isFocused ? colors.accent : 'transparent'};
  `}
`
