-- CreateTable
CREATE TABLE "game" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "signupStart" TIMESTAMP(3) NOT NULL,
    "signupEnd" TIMESTAMP(3) NOT NULL,
    "GameStart" TIMESTAMP(3) NOT NULL,
    "GameEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);
