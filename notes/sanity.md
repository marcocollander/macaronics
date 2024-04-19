# Pierwsze kroki z Rozsądkiem

Instalacja i konfiguracja Sanity to proces wieloetapowy; jest kilka rzeczy, które musimy zrobić. Omówimy je wszystkie
krok po kroku, ale na wyższym szczeblu przedstawiamy listę tego, co musi się wydarzyć

- Zainstaluj Sanity
- Zaloguj się i uwierzytelnij za pomocą Sanity
- Utworzyć magazyn danych (tj. bazę danych) do przechowywania naszych produktów
- Skonfiguruj bazę danych
- Dodaj produkty do bazy danych, gotowe do użycia

Chociaż przeprowadzę Cię przez proces instalacji, będziemy mogli tylko pokrótce poruszyć temat działania Sanity; Jeśli
chcesz dowiedzieć się więcej o produkcie w późniejszym terminie, dobrze będzie zapoznać się z dokumentacją na głównej
stronie internetowej

> Główna dokumentacja Sanity znajduje się na stronie www.sanity.io/docs lub można uzyskać do niej dostęp z wiersza
> poleceń (patrz dalej w tym rozdziale)

Zanim zaczniemy, musimy pamiętać o kilku założeniach, które będą miały wpływ na proces instalacji:

- Będziemy pracować z folderem o nazwie Sanity, przechowywanym w katalogu głównym naszego folderu projektu
- Masz działający adres e-mail, którego chcesz używać do logowania się do Sanity. (Istnieją inne sposoby logowania się
  do Sanity, ale jest to prawdopodobnie najłatwiejsze)

Jest jeszcze jeden kluczowy punkt, który muszę poruszyć: chociaż instalujemy Sanity, to tylko w celu hostowania danych.
Administrowanie naszym kontem/konfiguracją Sanity odbywa się zdalnie za pośrednictwem panelu na naszym koncie w witrynie
Sanity. Pamiętaj o tej myśli, instalując Sanity w ramach następnego ćwiczenia.

## Instalowanie Sanity

Instalowanie zdrowego rozsądku

Instalacja Sanity jest bardzo łatwa — została napisana dla Node/NPM, więc będzie korzystać z dość znanego procesu,
przynajmniej dla tych, którzy korzystają z Node.js. Wszystko odbywa się za pomocą wiersza poleceń, więc najpierw musisz
zainstalować Node.js i NPM; zakładając, że już to zrobiłeś (lub masz już zainstalowany), kontynuujmy proces instalacji  
