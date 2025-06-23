-- AddForeignKey
ALTER TABLE "game_class" ADD CONSTRAINT "game_class_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
