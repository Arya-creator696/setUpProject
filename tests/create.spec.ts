import { test, expect } from '@playwright/test';
import { createTodo } from '../util/todo';

test('creation of todo should work', async ({ request }) => {
  const {status,body}=await createTodo(request,{
    title:'First test'
  })
  expect (status).toBe(201)
  expect(body.id).not.toBe(null)
  expect(body.title).toBe("First test")
  
});

