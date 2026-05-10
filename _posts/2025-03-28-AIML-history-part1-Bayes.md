---
layout: post
title: "Following Steps of AI | Part 1: Bayes Original Essay"
date: 2025-03-26 12:00:00 +0000
tags: [mathematics, probability, statistic, AI]
excerpt: "In this post I overview the original Bayes essay on probabilistic inference from the modern point of view."
---

## Flow notes

Essay starts with quite interesting letter. It's exciting to see how they discuss "unsolvable" problems, which are well solved today. Maybe I should give a small biography of Bayes in the begining. 

Bayes start with a problem fromulation:

> Given the number of times in which an unknown event has happend and failed:
Required the chance that the probability of its happening in a single trial lies
somewhere between any two degrees of probability that can be named.

The whole text is cryptic from a modern point of view, but essentially Bayes talks about having observed the data about an unkown random vairable and asks whether this random variable could be in any way estimated using probabilities. Essentially, he is asking for a *posterior* distribution given observed data. This is exactly what we know today as a Bayes rule! 

He then proceeds to give some definitions from probability theory. Today, they look unformall, but I think those thoughs were quite novel at a time. For example, he gives a frequency definition of a probability, which does reassamble common modern definition. Also, he defines independent events as such that happening of one of them does not increase or decrease probability of others to happen. I remember my statistics professor making us distinguish between chance and probability. In modern mathematics, probability is always a number between $0$ and $1$, and it is usually used in the context of some probability distribution, meaning we keep in mind the law of total probablility. But, Bayes just says that chance and probability are the same. What do you have to say to that, professor? 

In the next proposition he discusses the sum rule of probabilities for mutual exclusive events, which he calls inconsistent. He uses anologies with betting and "expectation" a lot. It is interesting, since in modern days we usually get to expected values after probabilities, but Bayes uses expected values to proof (or more like justify) properties of probabilities. 


