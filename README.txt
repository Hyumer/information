Инструкции за стартиране на проекта:

1.Инсталирате Node.js
2. отваряте Powershell и влизаме в папка kursova
3. пишете: npm install, след това npx playwright install
4. След инсталацията на playwright, трябва да направите файловете които ще тестваме.
5. Те са предварително направени, така че трябва да ги стартирате като напишете в test директорията npx playwright test , може и npx playwright test --ui за визуален тест.
6. ако искате да пуснете само един код може да го направите чрез: npx playwright test tests/navigation.spec.ts , npx playwright test tests/errormessage.spec.ts, npx playwright test tests/bookdetails.spec.ts



