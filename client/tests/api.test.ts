import { test, expect } from '@playwright/test';

test('add rest api test', async ({ request }) => {
    
    const expectedResponse = {
        id: 1,
        title: 'Test',
        artist: 'Nirvana',
        genre: 'Alternative Rock',
        album: 'Nevermind',
        albumImageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg',
        youtubeId: 'm-ofL_3EZyE',
        lyrics: 'ddsdsd',
        tab: 'sdsdsd',
        createdAt: '2018-02-13T12:56:24.432Z',
        updatedAt: '2023-12-01T11:59:05.962Z',
    }

    const response = await request.get(`http://localhost:8081/songs`);
    
    expect(response.ok()).toBeTruthy();
    
    expect(response.status()).toBe(200);

    expect(await response.json()).toContainEqual(expect.objectContaining(expectedResponse));

});