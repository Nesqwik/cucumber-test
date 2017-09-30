Feature: Addition
  As a mathematician
  I want to add two numbers easily
  So that i can focus on more complexe math

  Scenario Outline: Add two positive numbers
    Given I have numbers <nb1> and <nb2>
    When I use add function
    Then I should have <result> as a result

    Examples:
      | nb1 | nb2  | result |
      | 1   | 1    | 2      |
      | 2   | 3    | 5      |
      | 10  | 32   | 42     |
      | 100 | 1237 | 1337   |


  Scenario: Add two neutral numbers
    Given I have numbers 0 and 0
    When I use add function
    Then I should have 0 as a result

  Scenario: Add same number twice
    Given I have number 4
    When I add this number to itself
    Then I should have 8 as a result