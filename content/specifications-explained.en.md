---
title: "Specs Explained"
date: 2018-01-12T01:30:50Z
draft: false
---


# What is Proof-Of-Work

Proof-of-Work is a security system that secures the past and current events on a blockchain. It comprises of a extremely difficult computation (the Work) to be verified easily from its result (the Proof).

In Vertcoin Mining we use a mathematical operation called "hashing". Hashing takes input data of any length and gives an output of a fixed length. Hashes are deterministic, meaning that giving the same input will always produce the same output. In Vertcoin Mining, the input to the hash is the header of the block containing a magic number.

That magic number is the difficult computation to do (the Work): the output hash value has to below a predetermined target, and the correct number can only be found by continuously changing the magic number until the output hash qualifies as a valid one. The Proof to having done the Work is the magic number itself: a Vertcoin user can verify the magic number is correct with only a single hash calculation.

# Why Proof-Of-Work

Proof-Of-Work is the most secure and balanced consensus algorithm (with ASIC Resistance). Consensus is very important in a decentralised system as the people who control consensus are able to verify the history of events. If a single entity aquires enough consensus they are able to write their own series of events. This would be very similar to the monetary system we have currently where users have no control over their own money. Currently money systems, the people who generate the money have all of the control over the money system.

# Why not Proof-Of-Stake

Proof-Of-Work is the most reliable consensus algorithm operating on Bitcoin for the last 10 years without failure. Proof-Of-Stake still has not yet been shown to work properly, as there have been multiple failures and hacks in the past. The second issue is that Proof-Of-Stake consensus is proportional to the amount of tokens that you hold. As you can imagine if you endlessly inflate the tokens, the users who already have tokens will have a disproportionally high amount of consensus to a new user.

# Why aren't on-chain transactions free and instant?

Lets take an example, lets make the block-time really fast so transactions are really quick. Now lets reduce the mining reward to zero which would make your transaction free (also inflation would be zero) and lets say that you mine your own block as well. Now my transactions would be free and instant, sounds amazing yeah?

This is a horrible horrible idea.

By making the block-time really fast you're setting yourself up for failure when the blocks get full, orphaned failed transactions will occur constantly. Secondly, by making the transaction free (mining cost 0) you're allowing bots to spam the network making empty transactions at zero cost. Since the bots would be mining their transactions at no cost, it would be incredible easy to attack the network.


# Why is the block-time 2.5 minutes

There are a lot of specification comparison sheets that float around the internet comparing coins. When it comes to block-time specifically, there is a reason Vertcoin's blocktime is 2.5 minutes. As with all specs, there are sweet spots. If you reduce the block-time to zero, everything is fine until the blocks start to fill up. Anything under 1 minute you will start to get more "orphaned transactions", essentially transactions stuck in limbo. 2.5 minutes is a sweetspot of not too fast and not too slow while maintaining good security on the Vertcoin main-chain and reasonable speed.


# How do Stealth Addresses work?


Stealth addresses work by generating a separate substitute addresses that you can give out publicly. If someone were to look up this addresses they wouldn't be able to see your balance or transactions as the addresses is just a substitute for your own, not the real addresses. The Lightning Network also gives similar levels of anonymity through substitute addresses so stealth addresses will be implemented as a later solution on top on Lightning Network.


