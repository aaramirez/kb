---
title: "Transcripción: Vector Databases Are Dead. Use This Instead"
type: transcripcion
channel: "Devsplainers"
videoId: "YLkSfz3EFGw"
source: "https://www.youtube.com/watch?v=YLkSfz3EFGw"
language: "en"
playlistOrder: 56
created: 2026-10-10
tags:
  - arnes/transcripcion
related:
  - "[[alternativa-a-bases-de-datos-vectoriales]]"
---

# Vector Databases Are Dead. Use This Instead

> Video original: https://www.youtube.com/watch?v=YLkSfz3EFGw
> Canal: Devsplainers — duración 8:29 — idioma: inglés (subtítulos auto-generados)
> Nota estructurada: [[alternativa-a-bases-de-datos-vectoriales]]

## Introducción: Turbopuffer degrada el índice vectorial del centro

[0:00] A company that sells vector databases buried the vector database in a blog post. They're called Turbo Puffer and runs search for cursor, notion, and anthropic. If you built an AI chatbot on your own documents, chances are it runs on a vector DB. Do you need to rip it out? The big AI companies are already trying three other ways to let AI find your data, and there's an ongoing debate over which one wins. By the end of this video, you'll know which one to pick and when the old vector database is still the right call. A vector database stores your text as embeddings, long lists of numbers that capture meaning and hands back the chunks closest to your question. Turbo Puffer built its whole engine around that. Every document lived at the address of its vector, the way a library shelves books by topic. That made vector search fast and everything else painful. In version three, every document gets a plain ID and the vector index becomes just another index next to keyword search and filters. V3 isn't in production yet, so this is all headline marketing, but this is the company that runs search over 10 billion notion documents [music] and it's telling you the vector index no longer sits at the center. So, what goes in the center

## Primer retador: búsqueda agéntica y el regreso de BM25

[1:18] instead? There are three answers on the table. Let's take them one at a time. The classic rack pipeline, [music] the setup most of us build, chops your documents into chunks and embeds them. At question time, it grabs the few closest chunks and pastes them into the prompt. It gets one shot. Turboroper CTO points out that even a reranker, which sorts these chunks, [music] doesn't decide that none of them are good and search again. An agent can. We have our first challenger, a gent search. The model holds search tools and runs a loop. Search, read, figure out what's missing, search again. Pipeshub tested this on Google's frames benchmark. 824 questions over 12,000 Wikipedia articles. The agent got 92.7% right. The best of 18 fixed pipelines got 78.9.

[2:13] When Pipeshop handed the model the exact right articles, it scored 93. So, the agent landed a third of a point below perfect retrieval. On questions that need five or more articles, the pipeline got 62% [music] and the agent got 90. Pipes sells this kind of system, but it published the code and the cost. The agent costs about three times as much per question. The slowest answer in 20 took 134 seconds against 54 for the pipeline and 7% of the questions ate 37% of the budget. An independent study from this year's LREC conference found the same pattern. More than three times the input tokens 50% more time and a plane reranker beat the agent at ranking. The loop wins the hard questions, but you pay for every lap. Inside that loop, old school keyword search often beats the vectors. BM25 is the ranking formula search engines used long before AI. It scores documents by the exact words they share with your query. Enterprise ragbench threw a half a million company documents from Slack, Gmail, Jira, Confluence, and GitHub at both. BM25 answered 68.8% correctly, and Vector search got 51.4.

[3:32] [music] Vectors even lost on the questions written to favor them because embedding models trained on public text don't know your code names, acronyms, and ticket numbers. One developer on Reddit wrote, "Customer IDs need equality, not a soulmate." That benchmark comes from Onyx, which sells Enterprise Search. Vector still earn a slot in the toolbox. On the browse comp plus Plus research benchmark, GPT5 as a search agent scored 70.1% with an embedding retriever and 55.9 with BM25, and it needed fewer [music] searches. A BM25 vendor says that BM25 setup was badly tuned. Cursor reports its agent got 12.5% more accurate when it added semantic search on top of grap. The vectors themselves are dirt cheap.

## Segundo y tercer retador: conectores MCP en vivo y conocimiento compilado

[4:23] Open AI's small embedding model costs 2 cents per million tokens. The expensive part is the loop that calls them. The second challenger skips the index entirely. An MCP connector is a standard plug that lets the AI ask an app like Notion or Salesforce directly. Microsoft's federated Copilot connectors work that way. They fetch data live over MCP with your own login and permissions. And Microsoft indexes nothing. Anthropic claw marketplace opened on September 23rd with more than 2,000 connectors and plugins. Open AAI went furthest. Individual users can no longer sync their apps into Chat GPT's index [music] and only admins can. Slack's API terms have banned bulk exports since 2025.

[5:10] [music] The apps that hold your data decide how much of it you get to copy, and I don't expect them to get more generous. [music] Live access has a price. A federated query is only as fast as the slowest app it asks. And every app ranks its own results. Glean, which sells an index, measured cloth co-work on live connectors at $2.98 per task against 58 for Glean with more than three times the tokens. On September 22nd, Glean added 182 live MCP server templates to its own product. The third challenger is one I pushed myself. In June, we made a video on Google's open knowledge format where an AI compiles your knowledge into a folder of markdown files. I said the folder does its thinking once up front and then you just read the answer. The most liked comment said, "Now take those new MD files, chunk it, and embed it in a vector DB to improve retrieval and performance." [music] 4 months later, the evidence site with that comment more than with me. A study from August tested my exact claim. The compiled wiki took about a hundred times more tokens to build than a rag index, which the author expected. The bet was that it pasted it back on every question. Instead, in the

## Veredicto: el vector como una herramienta más

[6:30] paper's words, the wiki spent about 21 times more tokens per query, so no break even point exists. The wiki still cited far better. 40% of its cited claims held up against 19 for rag. It's one author and 13 questions, so treat it as a warning light. The format itself has gone quiet. The last commit to the OKF repo landed on August 21st from its only contributor and 88 issue comments since then got zero replies from a maintainer. The idea lives on in products like Langchain's Open Wiki and Pine cones Nexus, which compiles company data ahead of time. Is the vector database dead? It got demoted from the center of the stack to one tool among Zephr. For most new builds, the default is an agent with cheap search tools, keyword search first, vectors for fuzzy meaning, and live connectors for the apps you don't own. The oneshot pipeline still wins on price and speed for simple lookups at high volume. For a coding agent or a small set of documents, Grap and a notes file will do. under 10 million vectors.

[7:38] Turbo Puffer's own CTO says Postgress with PG Vector is cheaper. Just update it to 0.8.7, which fixes a security hole. For company data spread across apps, start with live connectors and add an index only where latency or ranking hurts. Compile knowledge only when it's stable [music] and valuable. The question that decides it, how many hops does your typical question need? And can your users wait 2 minutes for the slow ones? Before you pay for another vector index, give your agent a keyword search tool.
