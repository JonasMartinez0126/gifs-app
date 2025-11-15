import { beforeEach, describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";


describe('useCounter', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: { current: any; };

    beforeEach(() => {
        const { result: hookValue } = renderHook(() => useCounter());
        result = hookValue;
    })

    test('should inicialize with default value of 10', () => {

        expect(result.current.counter).toBe(10);
    });

    test('should initialize with value 20', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue);
    });

    test('should increment counter when handleAdd is called', () => {

        act(() => {
            result.current.handleAdd();
        });

        expect(result.current.counter).toBe(11);
    });

    test('should decrement counter when handleSubstract is called', () => {

        act(() => {
            result.current.handleSubstract();
        });

        expect(result.current.counter).toBe(9);
    });

    test('should reset to initialValue the counter when handleReset is called', () => {

        act(() => {
            result.current.handleSubstract();
        });

        act(() => {
            result.current.handleSubstract();
        });

        expect(result.current.counter).toBe(8);

        act(() => {
            result.current.handleReset();
        });

        expect(result.current.counter).toBe(10);
    })
})