# _Pig Latin_

#### _enter your text, and out pops pig latin, 08/17/2016_

#### By _**Jackson Meyer**_

## Description
_A Pig Latin translator_

## Setup/Installation Requirements

* _first rule: program will do nothing to non-alphabetical characters, since they do not contain consanants or vowels_
    * Example Input: 3
    * Example Output: 3
* _second rule: The program adds "ay" to single-letter words beginning with a vowel._
    * Example Input: a,i,o,u,e
    * Example Output: aay, iay, oay, uay, eay.

* _third rule:The program adds "ay" to the end of multi-letter words beginning with a vowel_
    * Example Input: add
    * Example Output: adday

*  _fourth rule: with words that begin with a consanant, remove the consanant and place it at the end of the word, then, add "ay" to the end of the word_
    * Example Input: pen
    * Example Output: enpay

* _fifth rule: with words that begin with multiple consanants, remove them nd place them at the end of the word_
    * Example Input: drop
    * Example Output: opdray

*  _sixth rule: with words that begin with qu, bring both the "q" and the "u" to the end together, then, add "ay" to the end of the word:_
    * Example Input: quail
    * Example Output: ailquay


*  _seventh rule: words that don't begin with "q" and "u" but the word still contain them, they act as a group and adhere to the previous rules_
    * Example Input: squeel
    * Example Output: eelsquay

*  _eighth rule: For words beginning with the consanant "y", treat "y" as a consanant, then, add "ay" to the end of the word:_
    * Example Input: yelp
    * Example Output: elpyay

* _ninth rule: For sentences, multi-word input, follow the above rules for each word_
    * Example Input: Hello there, my name is jackson
    * Example Output: ellohay erethay, ymay amenay isway acksonjay

## Known Bugs



## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
