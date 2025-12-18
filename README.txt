Инструкции за стартиране на проекта:

1.Инсталирате Node.js
2. За улесняване на работатата може да изкарате папката kursova на Dekstop.
2. отваряте Node.js command promp и там пишете npm init playwright@latest
3. правим инсталацията с TypeScript, tests, true. 
5. След инсталацията на playwright, трябва да направите файловете с които ще тестваме.
6. Има предварително направена папка на име tests и трябва да влезете там kursova/tests/. Там напишете  npx playwright test , може и npx playwright test --ui за визуален тест.
7. ако искате да пуснете само един код може да го направите чрез: npx playwright test tests/navigation.spec.ts , npx playwright test tests/errormessage.spec.ts, npx playwright test tests/bookdetails.spec.ts






