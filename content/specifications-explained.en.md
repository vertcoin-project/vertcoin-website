---
title: "Specs Explained"
date: 2018-01-12T01:30:50Z
draft: false
---


# What is Proof-Of-Work?

Proof-of-Work is a security system that secures the past and current events on a blockchain. It is comprised of an extremely difficult computation (the Work) to be verified easily from its result (the Proof).

In Vertcoin Mining we use a mathematical operation called "hashing". Hashing takes input data of any length and gives an output of a fixed length. Hashes are deterministic, meaning that giving the same input will always produce the same output, even though the input that generates a given output cannot be found. In Vertcoin Mining, the input to the hash is the header of the block containing a magic number.

That magic number is the difficult computation to do (the Work): the output hash value has to below a predetermined target, and the correct number can only be found by continuously changing the magic number until the output hash qualifies as a valid one. The Proof to having done the Work is the magic number itself: a Vertcoin user can verify the magic number is correct with only a single hash calculation.

# Why Proof-Of-Work?

Proof-Of-Work is the most secure and balanced consensus algorithm (with ASIC Resistance). Consensus is very important in a decentralised system as the people who control consensus are able to verify the history of events. If a single entity aquires enough consensus they are able to write their own series of events. This would be very similar to the monetary system we have currently where users have no control over their own money. Currently money systems, the people who generate the money have all of the control over the money system.

# Why not Proof-Of-Stake?

Proof-Of-Work is the most reliable consensus algorithm operating on Bitcoin for the last 10 years without failure. Proof-Of-Stake is a permissioned system as opposed to a permissionless system like Proof-Of-Work. This means that in order to gain consensus holding in the system another user who holds the tokens needs to agree to give you some. This can become an issue if a user was ever able to obtain 50%+ of the supply it would be impossible to displace them, meaning that they would have full control over the network.  Secondly, over time users who hold tokens will own more tokens proportionally to new users as the system endlessly inflates.

The goal of a decentralised monetary system should always be to spread consensus as much as possible. Not only does this reduce central points of failure but it also ensures that more people have an equal say in the network rather than a central few.

# Why aren't on-chain transactions free and instant?

Lets take an example, lets make the block-time really fast so transactions are really quick. Now lets reduce the mining reward to zero which would make your transaction free (also inflation would be zero) and lets say that you mine your own block as well. Now my transactions would be free and instant, sounds amazing yeah?

This is a horrible horrible idea.

By making the block-time really fast you're setting yourself up for failure when the blocks get full, orphaned failed transactions will occur constantly. Secondly, by making the transaction free (mining cost 0) you're allowing bots to spam the network making empty transactions at zero cost. Since the bots would be mining their transactions at no cost, it would be incredible easy to attack the network.


# Why is the block-time 2.5 minutes?

There are a lot of specification comparison sheets that float around the internet comparing coins. When it comes to block-time specifically, there is a reason Vertcoin's blocktime is 2.5 minutes. As with all specs, there are sweet spots. If you reduce the block-time to zero, everything is fine until the blocks start to fill up. Anything under around 1 minute you will start to get more "orphaned transactions". These orphaned transactions occur not because of the blockchain itself but due to limitations of the internet and how fast the decentralised system can communicate equally across itself. Due to this lag time two miners could mine the same block at the same time, temporarily causing the chain to split in two very similar but different chains. It's really not a good idea to have this happening as it can lead to other issues but it will also result in one of the miners making no profit for their work. 2.5 minutes is a sweet spot of not too fast and not too slow while maintaining good security standard on the Vertcoin main-chain and reasonable speed.


# How do Stealth Addresses work?


Stealth addresses work by generating a separate substitute addresses that you can give out publicly. If someone were to look up this addresses they wouldn't be able to see your balance or transactions as the addresses is just a substitute for your own, not the real addresses. The new mobile/desktop application from Vertcoin will include a Lightning-ready, cleaner implementation of Stealth Addresses where it is able to provide substitute addresses for both on-chain and off-chain transactions, made possible through LIT.


