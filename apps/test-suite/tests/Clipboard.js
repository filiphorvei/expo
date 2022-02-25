import * as Clipboard from 'expo-clipboard';
import { Platform } from 'react-native';

export const name = 'Clipboard';

export function test({ describe, expect, it, afterEach, ...t }) {
  describe('Clipboard', () => {
    const throws = async (run) => {
      let error = null;
      try {
        await run();
      } catch (e) {
        error = e;
      }
      expect(error).toBeTruthy();
    };

    afterEach(async () => {
      await Clipboard.setStringAsync('');
    });

    describe('Strings', () => {
      it('sets and gets a string', async () => {
        await Clipboard.setStringAsync('test string');
        const result = await Clipboard.getStringAsync();
        expect(result).toEqual('test string');
      });
    });

    if (Platform.OS === 'iOS') {
      describe('URLs', () => {
        it('sets and gets an url', async () => {
          const exampleUrl = 'https://example.com';
          let hasUrl = await Clipboard.hasUrlAsync();
          expect(hasUrl).toEqual(false);
          await Clipboard.setUrlAsync(exampleUrl);
          hasUrl = await Clipboard.hasUrlAsync();
          expect(hasUrl).toEqual(true);
          const result = await Clipboard.getUrlAsync();
          expect(result).toEqual(exampleUrl);
        });

        it('rejects a malformed url', async () => {
          const malformedUrl = 'malformed url';
          await throws(() => Clipboard.setUrlAsync(malformedUrl));
          const hasUrl = await Clipboard.hasUrlAsync();
          expect(hasUrl).toEqual(false);
        });
      });
    }

    if (Platform.OS !== 'web') {
      describe('Images', () => {
        it('sets and gets a png image', async () => {
          const imageBase64 =
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
          const expectedResultRegex = 'data:image/png;base64,[A-Za-z0-9+/=]*';
          let hasImage = await Clipboard.hasImageAsync();
          expect(hasImage).toEqual(false);
          await Clipboard.setImageAsync(imageBase64);
          hasImage = await Clipboard.hasImageAsync();
          expect(hasImage).toEqual(true);
          const result = await Clipboard.getImageAsync({ format: 'png' });
          expect(result.data).toMatch(expectedResultRegex);
        });

        it('sets and gets a jpg image', async () => {
          const imageBase64 =
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
          const expectedResultRegex = 'data:image/jpeg;base64,[A-Za-z0-9+/=]*';
          let hasImage = await Clipboard.hasImageAsync();
          expect(hasImage).toEqual(false);
          await Clipboard.setImageAsync(imageBase64);
          hasImage = await Clipboard.hasImageAsync();
          expect(hasImage).toEqual(true);
          const result = await Clipboard.getImageAsync({ format: 'jpeg' });
          expect(result.data).toMatch(expectedResultRegex);
        });

        it('rejects invalid base64', async () => {
          const imageBase64 = 'invalid';
          await throws(() => Clipboard.setImageAsync(imageBase64));
          const hasImage = await Clipboard.hasImageAsync();
          expect(hasImage).toEqual(false);
        });
      });
    }
  });
}
