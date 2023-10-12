import getImages from '../requests/getImages';
import axios from 'axios';

jest.mock('axios');

describe('getImages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns an array of image urls', async () => {
    axios.get.mockResolvedValue({
      data: {
        collection: {
          items: [
            {
              data: [
                {
                  media_type: 'image'
                }
              ],
              links: [
                {
                  href: 'image-link-1'
                }
              ]
            },
            {
              data: [
                {
                  media_type: 'image'
                }
              ],
              links: [
                {
                  href: 'image-link-2'
                }
              ]
            },
            {
              data: [
                {
                  media_type: 'image'
                }
              ],
              links: [
                {
                  href: 'image-link-3'
                }
              ]
            }
          ]
        }
      }
    });

    const response = await getImages(test);
    expect(response).toBeTruthy();
    expect(response.length).toBe(3);
  });

});